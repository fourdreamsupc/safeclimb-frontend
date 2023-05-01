import http from '../../core/http-common'

class ServiceReviewService {
    endPoint = 'https://localhost:44398/api/v1/servicereviews';

    create(createServiceReview) {
        return http.post(this.endPoint, createServiceReview);
    }
}

export default new ServiceReviewService();
