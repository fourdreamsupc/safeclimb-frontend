import http from '../../core/http-common'

class ReportServiceService {
    endPoint = 'https://localhost:44398/api/v1/reports';

    create(createReport) {
        return http.post(this.endPoint, createReport);
    }
}

export default new ReportServiceService();
