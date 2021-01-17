class Github {
  constructor() {
    this.client_id = '3da1ece301bfce16f772';
    this.client_secret = '4c6c798059d1238a531694fa79b18ee1d6b35303';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}