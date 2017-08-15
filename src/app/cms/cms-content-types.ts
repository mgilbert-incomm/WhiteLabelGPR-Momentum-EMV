/*
 Put CmsContentTypes in here so that they can be shared between components
 */

export class CmsContentTypes {
    public static readonly PageHome = 'pageHome';
    public static readonly PageHelp = 'pageHelp';
    public static readonly PageHeader = 'pageHeader';
    public static readonly PageFooter = 'pageFooter';
    public static readonly PageAbout = 'pageAbout';
    public static readonly PageCardholderAgreements = 'pageCardholderAgreements';
    public static readonly PageManageCard = 'pageManageCard';
    public static readonly PageAboutVanilla = 'pageAboutVanilla';
    public static readonly PageManagePin = 'pageManagePin';
    public static readonly PageConfiguration = 'pageConfiguration';

    /* Moved this here because its shared between components and was having issues
       rendering on the home page when the string was located on the component
    */
    public static readonly LoginComponent = 'loginComponent';

}
