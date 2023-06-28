import http from '../../core/http-common'

class ServicesService {
    endPoint = 'https://safeclimb-api-management.azure-api.net/booking/api/v1/services';

    getAll() {
        return http.get(this.endPoint);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    getActivities(idService) {
        return http.get(`${this.endPoint}/${idService}/activities`);
    }
    getReviews(idService) {
        return http.get(`${this.endPoint}/${idService}/servicereviews`);
    }
    create(createServiceDto) {
        return http.post(this.endPoint, createServiceDto);
    }
    createActivity(createActivityDto) {
        return http.post(`https://safeclimb-api-management.azure-api.net/management/api/v1/activities`, createActivityDto);
    }
    update(id, updateServiceDto) {
        return http.put(`${this.endPoint}/${id}`, updateServiceDto);
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`);
    }

}

export default new ServicesService();
