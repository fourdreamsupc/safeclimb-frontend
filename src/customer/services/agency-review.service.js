import http from '../../core/http-common'

class AgencyReviewService {
    endPoint = 'https://safeclimb-api-management.azure-api.net/management/api/v1/agencyreviews';

    create(agencyReviewDto) {
        return http.post(this.endPoint, agencyReviewDto);
    }
}

export default new AgencyReviewService();

