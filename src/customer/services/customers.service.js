import http from '../../core/http-common'
import authHeader from "../../authentication/services/auth.header";

class CustomersService {
    endPoint = 'https://safeclimb-api-management.azure-api.net/profile/api/v1/customers';

    getAll() {
        return http.get(this.endPoint,{ headers: authHeader()});
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`,{ headers: authHeader()});
    }
    //check this one
    getHiredServicesByCustomerIdWithServiceInformation(id) {
        return http.get(`https://safeclimb-api-management.azure-api.net/booking/api/v1/hiredservice/customers/${id}/hiredservice`);
    }
    create(createCustomerDto) {
        return http.post(this.endPoint, createCustomerDto,{ headers: authHeader()});
    }
    update(id, updateCustomerDto) {
        return http.put(`${this.endPoint}/${id}`, updateCustomerDto,{ headers: authHeader()});
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`,{ headers: authHeader()});
    }
    findByEmail(email) {
        return http.get(`${this.endPoint}?email=${email}`,{ headers: authHeader()});
    }
}

export default new CustomersService();
