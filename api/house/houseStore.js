var cheerio = require('cheerio');
var house = require('../../mongoose/schemas/House.js')
const charset = require('superagent-charset');
const request = require('superagent');
charset(request)


let pageCount = 0;
let page = 0;
let __VIEWSTATE = null
let __EVENTVALIDATION = null

exports.buildData = async function () {
  pageCount = 0
  page = 0
  return getData()
}

exports.list = function () {
  return house.find().then(datas => {
    return datas.map((item) => {
      return item.toObject()
    })
  })
}


function getData(datas) {
  var datas = datas || []
  return request.get('http://www.dcfgj.com/lf_web_dremis/proinfo.aspx').charset('gbk')
    .query(page && {
        Proinfo1$Page1$pages: page,
        __EVENTTARGET: 'Proinfo1$Page1$LinkButton3',
        __VIEWSTATE,
        __EVENTVALIDATION
      })
    .then(function (sres) {
      var html = sres.text;
      var $ = cheerio.load(html, {decodeEntities: false});
      __VIEWSTATE = $('#__VIEWSTATE').val()
      __EVENTVALIDATION = $('#__EVENTVALIDATION').val()
      $('#Proinfo1_DataGrid1 tr').each(async (i, item)=> {
        if (i !== 0) {
          var obj = {}
          $(item).children().each((k, td) => {
            switch (k) {
              case 0:
                obj.projectName = getValue(td, $)
                break;
              case 1:
                obj.dev = getValue(td, $)
                break;
              case 2:
                obj.address = getValue(td, $)
                break;
              case 3:
                obj.area = getValue(td, $)
                break;
              case 4:
                obj.phone = getValue(td, $)
                break;
              case 5:
                obj.projectid = getCode(td, $)
                break;
            }
          })
          await house.update({projectName: obj.projectName}, obj, {upsert: true})
          datas.push(obj)
        }
      });
      var option = $('select[name="Proinfo1$Page1$pages"]').children()
      pageCount = parseInt($(option[option.length - 1]).text())
      pageCount = pageCount - 1 - page;
      page++
      if (pageCount >= 0) {
        return getData(datas)
      }
      return '构建成功'
    });
}


function getValue(td, $) {
  if ($(td).children().length > 0) {
    return ($($(td).children()[0]).attr('title') || $($(td).children()[0]).html() || '')
  } else {
    return ($(td).attr('title') || $(td).html() || '')
  }
}

function getCode(td, $) {
  return $($(td).children()[0]).attr('href').split('?')[1].split('=')[1]
}

