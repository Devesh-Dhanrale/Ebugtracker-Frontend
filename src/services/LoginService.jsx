import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://ec2-54-160-224-255.compute-1.amazonaws.com:6060/api/adminLogin";

class LoginService {

    validate(id,password)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' + id + '/' + password);
    }
}

export default new LoginService()


