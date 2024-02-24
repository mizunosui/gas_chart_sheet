//記述するspread　sheetを定義
const active_sheet = SpreadsheetApp.getActiveSheet();

function SendToSheet() {

  // 取得するデータに合わせて変数名とURLを変更する
  // 7：取得するデータのURLに記載して変数に格納　8:文字タイプの設定
  let N225_response = UrlFetchApp.fetch("");
  let content = N225_response.getContentText("utf-8");

  // 文字データの取得　11行目ラストは文字データへの変換　12：HTMLデータの邪魔な部分をreplaceで変換
  var N225_score = Parser.data(content).from('div class="YMlKec fxKbKc"').to('/div').iterate().toString();
  var N225_text = N225_score.replace(/>/," ").replace(/</,"");
  
  // 確認用
  // console.log(N225_text);

  //spread sheetのセルの取得　書込み
  var range = active_sheet.getRange('A2');
  range.setValue(N225_text);
}
