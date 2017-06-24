/**
 * URL的配置文件
 */

var URL = URL || {};

var type = 'dev'; // 开发为 'dev' 生产为 'dist'

var projectName = '/itas-portal';
URL.RootURL = '/itas-portal/home';
if (type == 'dev'){
    projectName = 'http://10.44.218.124:12080/itas-portal'; // 根据自己的实际情况设置
    URL.RootURL = '';
}

/** 应用市场 S **/
URL.GetAppList = projectName + '/market/getapplist';
URL.GetApplicationById = projectName + '/market/getapplicationbyid';
URL.GetManual = projectName + '/market/getapplicationbyid';
URL.GetProtocol = projectName + '/market/getprotocol';
URL.CheckIsGetDevelopFun = projectName + '/dev/checkIsGetDevelopFun';
URL.GetDevelopPackageById = projectName + '/market/getDevelopPack';

URL.UploadFile = projectName + '/market/uploadfile';
URL.BuyApp = projectName + '/market/buy';
/** 应用市场 E **/

/** 应用管理 S **/
URL.GetSystemList = projectName + '/appman/getsystemlist';
URL.GetSystemDetailById = projectName + '/appman/getuserapplicationinfobyid';
URL.GetSystemBillById = projectName + '/appman/getuserapplicationbill';
URL.SetFeestatus = projectName + '/appman/setfeestatus';
URL.UpdateSystemInfo = projectName + '/appman/updateuserapplication';
URL.GetSystemRechargeRecord = projectName + '/appman/getSystemRechargeRecord';
URL.AddPayPrepaid = projectName + '/appman/addPayPrepaid';

URL.PayStatusNormalImg = projectName + '/assets/static/images/pay_normal.png';
URL.PayStatusStopImg = projectName + '/assets/static/images/pay_stop.png';

/** 应用管理 E **/

/** 开发管理 S **/
URL.GetDeveloperList = projectName + '/dev/getDeveloperList';
URL.ApplyDeveloperFun = projectName + '/dev/applyDeveloperFun';
URL.AddDeveloper = projectName + '/dev/addDeveloper';
URL.GetDeveloperById = projectName + '/dev/getDeveloperById';
URL.UpdateDeveloper = projectName + '/dev/updateDeveloper';
URL.DeleteDeveloper = projectName + '/dev/deleteDeveloper';
URL.GetDeveloperRightProtocol = projectName + '/dev/getDeveloperRightProtocol';
URL.GetDeveloperProtocol = projectName + '/dev/getDeveloperProtocol';
URL.GetDeveloperBill = projectName + '/dev/getDeveloperBill';

URL.DefaultDeveloperImg = projectName + '/assets/static/images/developer.png';
/** 开发管理 E **/

/** 个人中心 S **/
URL.Register = projectName + '/usercenter/register';
URL.GetUserinfo = projectName + '/usercenter/getuserinfo';
URL.BindMobile = projectName + '/usercenter/bindMobile';
URL.GetSmsVerificationCode = projectName + '/usercenter/getSmsVerificationCode';
URL.ModifyMyInfo = projectName + '/usercenter/modifymyinfo';
URL.ModifyMyPassword = projectName + '/usercenter/modifymypwd';
URL.GetLastMonthFeeSummary = projectName + '/usercenter/getlastmonthfeesummary';
URL.GetUserMoneyDetail = projectName + '/usercenter/getusermoneydetail';
URL.GetWithdrawDefaultDisplyInfo = projectName + '/usercenter/getWithdrawDefaultDisplyInfo';
URL.AddWithdrawRecord = projectName + '/usercenter/addWithdrawRecord';
URL.GetUserOpSetting = projectName + '/usercenter/getUserOpSetting';
URL.GetRegProtocol = projectName + '/usercenter/getRegProtocol';

URL.DefaultUserImg = projectName + '/assets/static/images/user.png';
/** 个人中心 E **/

/** 文档资料 S **/
URL.GetPlatformInformationList = projectName + '/doc/getPlatformInformationList';
URL.GetPlatformInformationById = projectName + '/doc/GetPlatformInformationById';
URL.GetPlatformInformationCateByCateNo = projectName + '/doc/getPlatformInformationCateByCateNo';

URL.GetRegProtocol = projectName + '/usercenter/getRegProtocol';
/** 文档资料 E **/

/** 微信支付 S **/
URL.GetWXConfig = projectName + '/getwxconfig';
URL.GetPrepayId = projectName + '/getprepayid';
URL.GetWXPaydata = projectName + '/getwxpaydata';
/** 微信支付 E **/

/** 分享页面 S **/
URL.ShareImgURL = 'http://pay.011011.com/itas-portal/assets/images/portal/logo.png'
URL.SharePageURL = 'http://pay.011011.com/itas-portal/dist/pages/share/share.html';
/** 分享页面 E **/

export default URL
