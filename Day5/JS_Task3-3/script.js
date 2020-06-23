'use strict';
$(document).ready(()　=> {
  const id = "dj00aiZpPWJWNFFWdVRLU09DRCZzPWNvbnN1bWVyc2VjcmV0Jng9MjM-";
  const url = "https://map.yahooapis.jp/search/zip/V1/zipCodeSearch";
  
  $('#zipSearch').on('click', () => {
    const zip = $(zipCode).val();
    if (zip === ''){
      window.alert('入力してください。');
      return;
    } else if (zip.match(/[^0-9]+/)) {
      window.alert('数字のみを入力してください。');
      return;
    }
    $.ajax({
      url: `${url}?query=${zip}&appid=${id}&output=json`,
      dataType: 'jsonp'
    }).done((resp) => {
      if(resp.ResultInfo.Count === 0) {
        window.alert('データがありません。');
        return;
      }
      const position = (resp.Feature[0].Geometry.Coordinates).split(',');
      $('#adress').text(resp.Feature[0].Property.Address);
      $('#lati').text(position[0]);
      $('#long').text(position[1]);
      $('#station').text(`${resp.Feature[0].Property.Station[0].Railway} ${resp.Feature[0].Property.Station[0].Name} 駅`);
    }).fail((err) => {
      console.log(err);
      windows.alert('エラー')
    });
  });
});
