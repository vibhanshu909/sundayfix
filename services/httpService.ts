import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://task-devel.cleevio-vercel.vercel.app/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLEEVIO_TOKEN}`,
  },
})
