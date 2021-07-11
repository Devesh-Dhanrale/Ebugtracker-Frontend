import axios from 'axios';

const BUG_API_BASE_URL = "http://ec2-54-160-224-255.compute-1.amazonaws.com:6060/api/bugs";

class BugService{
   viewAllBugs()
   {
        return axios.get(BUG_API_BASE_URL);

     }

   
   
}

export default new BugService()



