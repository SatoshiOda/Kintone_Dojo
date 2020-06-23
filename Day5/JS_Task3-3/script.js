'use strict';
$(document).ready(()　=> {
  const id = "dj00aiZpPWJWNFFWdVRLU09DRCZzPWNvbnN1bWVyc2VjcmV0Jng9MjM-";
  const url = "https://map.yahooapis.jp/search/zip/V1/zipCodeSearch";

  $('#zipSearch').on('click', () => {
    const zip = $(zipCode).val();
    console.log('ログ！！！');
    $.ajax({
      url: `${url}?query=${zip}&appid=${id}&output=json`,
      dataType: 'jsonp'
    }).done((resp) => {
      const position = (resp.Feature[0].Geometry.Coordinates).split(',');
      $('#adress').text(resp.Feature[0].Property.Address);
      $('#lati').text(position[0]);
      $('#long').text(position[1]);
      $('#station').text(resp.Feature[0].Property.Station[0].Railway + ' ' + resp.Feature[0].Property.Station[0].Name + ' 駅');
    }).fail((err) => {
      console.log(err);
    });
  });
});
