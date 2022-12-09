import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import SearchBar from "../search/SearchBar";
import logo from "../images/ultra.png"
import Menu from "../menu/Menu";

function Header() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/')
    }

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className="head">
                 <div className="phone-icon">
                    <div>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>  
                    </div>
                    <div>09:00-20:00</div>
                </div>
                <ul id="top-menu">
                    <li><a href="#">Ultra Friends</a></li>
                    <li><a href="#">Ultra Credit</a></li>
                    <li><a href="#">Showroom</a></li>
                    <li><a href="#">Discounts</a></li>
                    <li><a href="#">Contests</a></li>
                    <li><a href="#">Best Price Guaranteed</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
           
           

            <div className="second-header">
                <div><a href="/">
                    <svg id="header_logo" width="173" height="31" viewBox="0 0 1414 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1050.99 245.348C1016.62 247.987 985.783 245.348 961.991 223.364C955.823 217.208 949.654 210.173 944.367 201.379C933.793 184.671 917.932 176.756 890.615 176.756H887.972C880.041 176.756 863.298 176.756 855.368 176.756C850.081 176.756 838.625 174.998 824.526 204.897C815.715 225.123 799.853 236.555 780.467 243.59C769.012 247.107 761.962 244.469 761.962 230.399C762.844 199.62 762.844 168.842 761.962 138.943C761.962 123.993 767.25 119.596 781.348 119.596C816.596 119.596 851.843 119.596 887.09 119.596C904.714 119.596 923.219 119.596 940.843 119.596C947.892 119.596 954.06 120.476 961.11 117.838C961.991 117.838 964.635 116.958 965.516 116.079C975.209 110.802 985.783 102.009 984.021 87.9385C982.258 75.6271 974.328 68.592 963.753 65.9539C961.991 65.9539 959.347 65.0745 956.704 65.0745C932.031 64.1951 908.239 64.1951 883.566 64.1951C870.348 64.1951 856.249 64.1951 843.031 63.3157C828.051 63.3157 816.596 58.9188 809.546 51.0043C801.616 43.0899 798.091 32.5372 797.21 19.3465C796.329 4.39692 803.378 0 814.833 0C815.715 0 816.596 0 817.477 0C838.625 0 859.774 0 880.922 0C887.972 0 895.021 0 902.071 0H950.536C1000.76 1.75877 1035.13 14.9495 1048.35 62.4363C1049.23 65.0745 1050.11 66.8332 1050.11 69.4714C1058.92 111.682 1043.94 146.857 1000.76 165.324C1019.27 187.309 1036.89 208.414 1054.52 229.519C1063.33 238.313 1064.21 244.469 1050.99 245.348Z" fill="white"></path>
                        <path d="M539.905 182.912C539.905 182.912 539.024 182.912 539.905 182.912C539.024 182.912 538.143 182.912 538.143 182.912H391.866C386.579 182.912 383.054 178.515 383.054 174.118V67.7129C383.054 49.2458 376.005 32.5375 363.668 20.2261C352.213 8.7941 336.352 0.879639 317.847 0.879639C312.56 0.879639 309.035 5.27656 309.035 9.67349V236.555C309.035 241.831 313.441 245.349 317.847 245.349C317.847 245.349 451.787 247.107 496.727 245.349C501.133 245.349 506.42 244.469 509.945 242.71C517.875 240.072 524.925 235.675 530.212 229.52C539.905 219.846 545.192 206.656 546.073 192.586V191.706C546.073 188.189 543.43 184.671 539.905 182.912Z" fill="white"></path>
                        <path d="M783.111 44.8486C782.23 40.4517 780.468 36.0548 778.706 31.6579C776.062 25.5022 772.537 21.1052 768.131 15.8289C763.725 11.432 758.438 7.91446 753.151 5.27631C747.864 2.63815 744.339 0.879385 738.171 0C736.409 0 735.528 0 733.765 0C732.003 0 731.122 0 730.24 0H693.231H602.469H565.459C564.578 0 564.578 0 563.697 0H518.757C516.994 0 514.351 0.879385 513.469 2.63815C511.707 4.39692 511.707 6.15569 511.707 7.91446C511.707 11.432 511.707 14.9495 512.588 18.4671C513.469 22.864 515.232 27.2609 516.994 31.6579C519.638 37.8135 523.162 42.2105 527.568 47.4868C531.974 51.8837 537.261 55.4012 542.548 58.0394C547.836 60.6776 551.36 62.4363 557.529 63.3157C559.291 63.3157 561.934 63.3157 563.697 63.3157C564.578 63.3157 564.578 63.3157 565.459 63.3157H602.469C606.875 63.3157 611.281 67.7126 611.281 72.9889V237.434C611.281 242.71 615.687 247.107 620.974 247.107H676.488C681.775 247.107 686.181 242.71 686.181 237.434V72.9889C686.181 67.7126 689.706 64.1951 694.993 63.3157H732.003C732.884 63.3157 734.646 63.3157 735.528 63.3157H777.824C779.587 63.3157 782.23 62.4363 783.111 60.6776C784.874 58.9188 784.874 57.16 784.874 55.4012C784.874 51.8837 783.993 48.3662 783.111 44.8486Z" fill="white"></path>
                        <path d="M1407.87 227.761C1384.96 188.188 1361.17 149.495 1337.38 109.923C1332.97 102.009 1327.68 93.2148 1323.28 83.5416C1322.4 81.7828 1321.51 80.024 1319.75 77.3859C1318.87 76.5065 1318.87 75.6271 1317.99 73.8683C1310.94 60.6776 1303.89 47.4868 1295.96 35.1754C1295.96 34.296 1295.96 34.296 1295.08 34.296C1293.32 30.7785 1291.55 28.1403 1289.79 25.5022C1279.22 9.67323 1265.12 0 1251.02 0H1249.26C1235.16 0 1221.06 8.79385 1210.48 25.5022C1209.6 27.2609 1206.96 30.7785 1205.2 34.296L1204.32 35.1754C1195.5 47.4868 1189.34 60.6776 1182.29 73.8683C1180.52 76.5065 1178.76 80.024 1177 82.6622C1170.83 93.2148 1164.66 103.767 1160.26 112.561C1137.35 150.375 1114.44 188.188 1092.41 226.002C1088.88 231.278 1080.07 239.193 1095.05 242.71C1118.84 247.987 1141.75 242.71 1159.38 228.64C1167.31 222.484 1174.36 214.57 1179.64 205.776C1186.69 194.344 1192.86 182.912 1199.03 171.48C1214.01 146.857 1228.99 121.355 1244.85 94.9736C1246.61 92.3354 1248.38 89.6973 1250.14 86.1797C1251.9 88.8179 1253.66 91.456 1255.43 94.9736C1271.29 121.355 1286.27 146.857 1301.25 171.48C1308.3 182.912 1313.58 194.344 1320.63 205.776C1325.92 215.449 1332.97 222.484 1340.9 228.64C1358.52 242.71 1381.43 247.987 1405.23 242.71C1420.21 240.951 1411.39 233.037 1407.87 227.761Z" fill="white"></path>
                        <path d="M276.431 16.7083C276.431 -0.879427 267.619 -0.879427 255.282 2.63811C229.728 11.432 212.986 33.4166 212.104 63.3157C211.223 84.4209 212.104 105.526 211.223 125.752C211.223 167.083 200.649 178.515 159.234 180.274C155.709 180.274 147.778 181.153 138.966 181.153C130.154 181.153 121.343 180.274 118.699 180.274C77.2835 177.636 66.7093 167.083 66.7093 125.752C66.7093 104.647 66.7093 83.5415 65.8281 63.3157C64.9469 34.296 48.2044 11.432 22.6501 2.63811C9.43236 -0.879427 -0.260651 -0.879427 0.620533 16.7083C1.50172 55.4012 -1.14183 94.0941 0.620533 132.787C3.26408 191.706 25.2937 223.364 79.927 237.434C99.313 242.71 118.699 245.348 138.966 245.348C158.352 245.348 178.62 241.831 198.006 237.434C252.639 223.364 274.668 191.706 277.312 132.787C278.193 94.0941 275.55 55.4012 276.431 16.7083Z" fill="white"></path>
                        <path d="M1240.44 146.857L1199.03 203.138C1192.86 211.053 1199.03 222.485 1208.72 222.485H1290.67C1300.37 222.485 1306.53 211.053 1300.37 203.138L1258.95 146.857C1255.42 140.702 1244.85 140.702 1240.44 146.857Z" fill="#D92121"></path>
                    </svg>
                </a></div>
                <div onClick={() => setShowMenu(!showMenu)}>menu</div>
                <SearchBar />
                <div style={{width: '60px', display: 'flex'}}>
                <span className="cart-logo"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></span>
                <span className="user-logo"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
                </div>
            </div>

            {showMenu && <Menu />}


        </header>
    );
};

export default Header;