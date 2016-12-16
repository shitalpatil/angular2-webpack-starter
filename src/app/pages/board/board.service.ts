import {WidgetData} from "./WidgetData";
import { Injectable } from '@angular/core'
/**
 * Created by skpatil on 12/16/2016.
 */
@Injectable()
export class WidgetBoardService {
    getWidgets() : WidgetData[] {
        return [ new WidgetData("HP","The Hewlett-Packard Company was an American multinational...","http://onber.ru/published/publicdata/IMODULERUSHOP/attachments/SC/themes/i-module/images/logo/logoHp.png"),
                 new WidgetData("IBM","International Business Machines Corporation is an Americ...","https://www.citrix.com/content/citrix/en_us/solutions/mobile-workspaces/partners/jcr:content/content-par/layout_tool_386326983/column-71707-par/image_copy_2112624291/image.img.620.high.png/1468354584881.png"),
                 new WidgetData("Amazon","Amazon.com, often simply Amazon, is an American elect...","https://arunkchow.files.wordpress.com/2014/12/27385-1.png?w=100&h=100"),
                 new WidgetData("Apollo Group","Apollo Education Group, Inc. is an American corporati...","http://4.bp.blogspot.com/-lI5U7819AtA/UpzBm4MXXUI/AAAAAAAALuA/HuIMenR5uhc/s1600/Apollo+Group.png")];
    }
}