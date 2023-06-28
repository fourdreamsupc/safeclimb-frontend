import http from '../../core/http-common'

class ServiceReviewService {
    endPoint = 'https://safeclimb-api-management.azure-api.net/management/api/v1/servicereviews';

    create(createServiceReview) {
        return http.post(this.endPoint, createServiceReview);
    }
}

export default new ServiceReviewService();
