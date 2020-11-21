class NetworkService {
  constructor() {
    this.present = 'https://kobzarev.su/presentList.json';
    this.quitting = 'https://kobzarev.su/quittingList.json';
  }

  getPresent() {
    return fetch(this.present, {
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return false;
    })
  }
  
  getQuitting() {
    return fetch(this.quitting, {
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return false;
    })
  }
}

const networkService = new NetworkService();
export default networkService;
