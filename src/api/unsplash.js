import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c082271fdc91d30a57343e39f70316f8e3ea3e28ac33cb15175d541d0d467f61',
  },
})

// Access Key
// c082271fdc91d30a57343e39f70316f8e3ea3e28ac33cb15175d541d0d467f61
// Secret key
// ddf6bd0cf2673ea0bd7f605e08fa421b6575610bdfa49ad37b353d69383c08d0
