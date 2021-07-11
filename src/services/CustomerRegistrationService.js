import axios from 'axios';

const REGISTER_API_BASE_URL = "http://ec2-54-160-224-255.compute-1.amazonaws.com:6060/api/";

class CustomerRegistrationService {
 

    registerCustomer( customer) 
    { 
        return axios.post(REGISTER_API_BASE_URL + "signup/customers", customer);
    }
    
    validate(id,password)
    {
        return axios.get(REGISTER_API_BASE_URL+ 'login/customers/'+ id + '/' + password);
    }
    
    
}

export default new CustomerRegistrationService()