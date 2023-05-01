import http from '../../core/http-common'

class AgencyReviewService {
    endPoint = 'https://localhost:44398/api/v1/agencyreviews';

    create(agencyReviewDto) {
        return http.post(this.endPoint, agencyReviewDto);
    }
}

export default new AgencyReviewService();

