import http from '../../core/http-common'

class ServicesService {
    endPoint = 'https://safeclimb-api-management.azure-api.net/booking/api/v1/services';

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
}

export default new ServicesService();
