import axios from 'axios';

const BUG_API_BASE_URL = "http://localhost:6060/api/bugs";

class BugService{
   viewAllBugs()
   {
        return axios.get(BUG_API_BASE_URL);

     }

   
   
}

export default new BugService()



