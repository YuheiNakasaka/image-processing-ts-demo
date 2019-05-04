// wellflat/imageprocessing-labs
// https://github.com/wellflat/imageprocessing-labs/blob/master/cv/pixel_clustering/pixelcluster.js
class KMeans {
  public samples: number[][];
  public ncluster: number;

  constructor(samples: number[][]) {
    this.samples = samples;
    this.ncluster = 1;
  }

  public run(): {
    centroids: number[][];
    code: number[][];
  } {
    const centroids: number[][] = [];
    const previous: number[][] = [];
    let clusters: number[][][] = [];
    let code: number[][] = [];
    const len = this.samples.length;
    const eps = 1.0e-8;
    const maxIter = 1000;
    let iter = 0;

    const d = [];
    let sumDistance = 0.0;
    let label;
    let k;
    let i;
    let r = Math.floor(Math.random() * len);
    centroids[0] = [];
    centroids[0][0] = this.samples[r][0];
    centroids[0][1] = this.samples[r][1];
    centroids[0][2] = this.samples[r][2];
    previous[0] = [0.0, 0.0, 0.0];
    clusters[0] = [];

    // 中心点を調整する
    for (k = 1; k < this.ncluster; k++) {
      sumDistance = 0.0;
      for (i = 0; i < len; i++) {
        d[i] = this.nearest(this.samples[i], centroids)[1];
        sumDistance += d[i];
      }
      sumDistance *= Math.random(); // これ何...
      for (i = 0; i < len; i++) {
        sumDistance -= d[i];
        if (sumDistance > 0) continue;
        centroids[k] = [];
        centroids[k][0] = this.samples[i][0];
        centroids[k][1] = this.samples[i][1];
        centroids[k][2] = this.samples[i][2];
        break;
      }
      previous[k] = [0.0, 0.0, 0.0];
      clusters[k] = [];
    }
    for (i = 0; i < len; i++) {
      label = this.nearest(this.samples[i], centroids);
      clusters[label[0]].push(this.samples[i]);
    }

    while (!this.canTerminate(centroids, previous, eps) && iter < maxIter) {
      iter++;
      for (let k = 0; k < this.ncluster; k++) {
        if (!clusters[k] || !clusters.length) continue;
        let r = 0.0;
        let g = 0.0;
        let b = 0.0;
        let llen = clusters[k].length;
        for (let i = 0; i < llen; i++) {
          r += clusters[k][i][0];
          g += clusters[k][i][1];
          b += clusters[k][i][2];
        }
        previous[k][0] = centroids[k][0];
        previous[k][1] = centroids[k][1];
        previous[k][2] = centroids[k][2];
        centroids[k] = [r / llen, g / llen, b / llen];
      }

      clusters = [];
      code = [];
      for (i = 0; i < len; i++) {
        let minDistance = Number.MAX_VALUE;
        let currentLabel = -1;
        for (k = 0; k < this.ncluster; k++) {
          const d = this.distance(centroids[k], this.samples[i]);
          if (d < minDistance) {
            minDistance = d;
            currentLabel = k;
          }
        }
        if (!clusters[currentLabel]) clusters[currentLabel] = [];
        if (!code[currentLabel]) code[currentLabel] = [];
        clusters[currentLabel].push(this.samples[i]);
        code[currentLabel].push(i);
      }
    }
    return {
      centroids: centroids,
      code: code
    };
  }

  public quantize(samples: number[][], centroids: number[][], code: number[][]): number[][] {
    let ncluster = centroids.length;
    for (let k = 0; k < ncluster; k++) {
      for (let i = 0; i < code[k].length; i++) {
        samples[code[k][i]] = centroids[k];
      }
    }
    return samples;
  }

  private distance(a: number[], b: number[]): number {
    const rd = a[0] - b[0];
    const gd = a[1] - b[1];
    const bd = a[2] - b[2];
    return rd * rd + gd * gd + bd * bd;
  }

  private nearest(sample: number[], centroids: number[][]) {
    let minIndex = 0;
    let minDistance = Number.MAX_VALUE;
    let clusterCount = centroids.length;
    for (let k = 0; k < clusterCount; k++) {
      const d = this.distance(centroids[k], sample);
      if (minDistance > d) {
        minDistance = d;
        minIndex = k;
      }
    }
    return [minIndex, minDistance];
  }

  private canTerminate(centroids: number[][], previous: number[][], eps: number): boolean {
    let cnt = 0;
    for (let k = 0; k < this.ncluster; k++) {
      if (this.distance(centroids[k], previous[k]) < eps) cnt++;
    }
    if (cnt === this.ncluster) return true;
    else return false;
  }
}

export default KMeans;
