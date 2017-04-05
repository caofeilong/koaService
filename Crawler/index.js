var cheerio = require('cheerio');
const charset = require('superagent-charset');
const request = require('superagent');
charset(request)

let pageCount = 0;
let page = 0;
let __VIEWSTATE = null
let __EVENTVALIDATION = null

function getData() {
    request.get('http://www.dcfgj.com/lf_web_dremis/proinfo.aspx').charset('gbk')
        .query(page && {
                Proinfo1$Page1$pages: page,
                __EVENTTARGET: 'Proinfo1$Page1$LinkButton3',
                __VIEWSTATE,
                __EVENTVALIDATION
            })
        .end(function (err, sres) {
            var html = sres.text;
            var $ = cheerio.load(html, {decodeEntities: false});
            __VIEWSTATE = $('#__VIEWSTATE').val()
            __EVENTVALIDATION = $('#__EVENTVALIDATION').val()
          $('#Proinfo1_DataGrid1 tr').each((i, item)=> {
                if (i !== 0 ) {
                    let row = ''
                    $(item).children().each((k, td) => {
                        if ($(td).children().length > 0) {
                            row = row + '    ' + ($($(td).children()[0]).attr('title') ||$($(td).children()[0]).html() || '')
                        } else {
                            row = row + '    ' + ($(td).attr('title') || $(td).html() || '')
                        }
                    })
                    row.trim() && console.info((i+(page*20)) + '  ' + row);
                }

            });
            var option = $('select[name="Proinfo1$Page1$pages"]').children()
            pageCount = parseInt($(option[option.length - 1]).text())
            pageCount = pageCount-1 - page;
            page++
            if (pageCount >= 0) {
                getData()
            }
        });
}

getData()
