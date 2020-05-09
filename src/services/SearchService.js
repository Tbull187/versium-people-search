

export default class SearchService { 
  baseUrl = 'https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100';
  proxyurl = 'https://cors-anywhere.herokuapp.com/';

  testUrl = 'https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=mark&d_last=prentice&d_state=wa';

  constructor() {}

  async search(firstName, lastName, state) {
    const url = `${this.baseUrl}&d_first=${firstName}&d_last=${lastName}&d_state=${state}`;

    try {
      const response = await fetch(this.proxyurl + url);
      return response.json();
    }
    catch(e) {
      console.log(e);
    }
  }

}