import axios from 'axios'

const feedServices = {
  getItems() {
    return new Promise((resolve, reject) => {
      // TODO: My dumbass returning a redundant promise
      axios
        .get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(resolve)
        .catch(reject)
    })
  }
}

export { feedServices }
