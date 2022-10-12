const options = {
  format: 'A3',
  orientation: 'portrait',
  border: '8mm',
  header: {
    height: '15mm',
    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
  },
  footer: {
    height: '20mm',
    contents: {
      first: 'Cover page',
      2: 'Second page', // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: 'Last Page',
    },
  },
};
