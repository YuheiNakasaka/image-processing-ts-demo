class GaussianFilter {
  public sigma: number;
  public w: number;
  public h: number;
  public centerX: number;
  public centerY: number;
  public kernel: Float32Array;

  constructor(sigma = 1, w = 7, h = 7) {
    this.sigma = sigma;
    this.w = w;
    this.h = h;
    this.centerX = Math.floor(this.w / 2);
    this.centerY = Math.floor(this.h / 2);
    this.kernel = new Float32Array(this.w * this.h);

    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        this.kernel[y * this.w + x] = this.get(Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2));
      }
    }
  }

  get(distance: number): number {
    return Math.exp(-distance / (2 * Math.pow(this.sigma, 2)));
  }
}

export default GaussianFilter;
