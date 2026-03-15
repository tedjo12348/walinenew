
import { Waline } from '@waline/vercel';

export default Waline({
  database: process.env.POSTGRES_URL,
});
