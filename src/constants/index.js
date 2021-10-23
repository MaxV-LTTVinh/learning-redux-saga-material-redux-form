export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
    {
        value:0,
        label: "READY",
    },
    {
        value:1,
        label: "IN PROGRESS",
    },
    {
        value:2,
        label: "COMPLETED",
    },

];

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};
