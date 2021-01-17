class Github {
  constructor() {
    this.client_id = '7e6784ab646694d44dfb';
    this.client_secret = 'd65f842f380cfa4874ca2fefcbf0ad86a691b886';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    // const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }
}