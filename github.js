class GitHub{
    constructor(){
        this.client_id='e613bd16c66fa093459e';
        this.client_secret='7fa51d8a17f36fba7d23986349d007e4fe845535';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos=await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}