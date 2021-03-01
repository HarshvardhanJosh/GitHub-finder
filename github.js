class GitHub {
  constructor() {
    this.client_id = "9e45e3976a4329b6f4c3";
    this.client_secret = "2ab10a19c531081577a13cda6c722258bc963fbf";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getuser(user) {
    const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const repo_url = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const profileResponse = await fetch(url);
    const repoResponse = await fetch(repo_url);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}