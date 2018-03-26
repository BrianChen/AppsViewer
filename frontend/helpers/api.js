import $ from 'jquery';

export const fetchApplications = (success, error) => {
  $.ajax({
    url: `/api/applications`,
    type: 'GET',
    success,
    error
  });
};

export const asArray = (object) => Object.keys(object).map(key => object[key]);
