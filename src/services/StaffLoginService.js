import axios from 'axios'

const baseUrl = "http://ec2-54-160-224-255.compute-1.amazonaws.com:6060/api/staffLogin";

class StaffLoginService {

    validate(id,password)
    {
        return axios.get(baseUrl+ '/'+ id + '/' + password);
    }

    getDetailsById(bugId)
    {
        return axios.get("http://ec2-54-160-224-255.compute-1.amazonaws.com:6060/api/bugs/"+ bugId);
    }
}

export default new StaffLoginService()