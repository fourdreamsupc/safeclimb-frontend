import http from '../../core/http-common'

class HiredService {
    endPoint = 'https://localhost:44398/api/v1/hiredservice';

    getAll() {
        return http.get(this.endPoint);
    }
    getExtendInformation(agencyId) {
        return http.get(`https://safeclimb-api-management.azure-api.net/booking/api/v1/hiredservice/agencies/${agencyId}/hiredservice`);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    create(createHiredServiceDto) {
        return http.post(this.endPoint, createHiredServiceDto);
    }
    update(id, updateHiredServiceDto) {
        return http.put(`${this.endPoint}/${id}`, updateHiredServiceDto);
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`);
    }
}
export default new HiredService();
