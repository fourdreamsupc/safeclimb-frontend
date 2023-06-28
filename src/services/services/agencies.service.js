import http from '../../core/http-common'

class AgenciesService {
    endPoint = 'https://safeclimb-api-management.azure-api.net/profile/api/v1/agencies';

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
}

export default new AgenciesService();
