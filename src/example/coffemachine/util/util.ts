class CoffeeUtil {

  private static isCleaning: boolean = false

  static doCleaning(): boolean {
    if (!this.isCleaning) {
      this.isCleaning = true
    }
    return true
  }

  static isCleaningInProgress(): boolean {
    return this.isCleaning
  }
}