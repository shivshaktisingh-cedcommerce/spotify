import React from 'react'
import './Component4.css'

class Componentnew extends React.Component{
    render(){
        return (
            <div id='Component4'>
                <center>
                    <div id='head'><b>Pick your Premium</b></div>
                    <div>Listen without limits on your phone, and other devices.</div>
                    <div id='payment_img'>
                        <img src='https://nuvei.com/wp-content/uploads/2021/02/upi-1-420x240.png'></img>
                        <img src='https://www.indifi.com/blog/wp-content/uploads/2020/02/Best-Way-To-Merchandise-Products-On-PayTm.jpg'></img>
                        <img src='https://www.seekpng.com/png/detail/336-3364024_visa-logo-png-visa-money-bags-tanktop.png'></img>
                        <img src='https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo.svg'></img>
                        <img src='https://img.favpng.com/21/5/13/american-express-logo-credit-card-payment-png-favpng-8tx6epUgjhQeNcJFzp5fhKgZQ.jpg'></img>
                        <img src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png'></img>
                    </div>
                    <div id='content'>
                        <div className='card'>
                            <div><button className='btn1'>One-time plans available</button></div>
                            <div><b>Mini</b></div>
                            <div>From ₹7/day</div>
                            <div id="temp">1 account</div>
                            <div className='data'>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <div>Ad-free music listening on mobile</div>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Group Session</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Download 30 songs on 1 mobile device</span>
                                </p>
                            </div>
                            <div>
                                <button className='view'>VIEW PLANS</button>
                                <p className='cond'><a href='#'>Terms and conditions apply.</a></p>
                            </div> 
                        </div>
                        <div className='card'>
                            <div><button className='btn2'>1 month free </button></div>
                            <div><button className='btn1'>One-time plans available</button></div>
                            <div><b>Individual</b></div>
                            <div>₹119/month after offer period</div>
                            <div>1 account</div>
                            <div className='data'>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Ad-free music listening on mobile</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Group Session</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Download 10k songs/device on 5 devices</span>
                                </p>
                            </div>
                            <div>
                                <button className='view'>VIEW PLANS</button>
                                <p className='cond'><a href='#'>Terms and condition apply.</a> 1 month free not available for user who have already tried premium</p>
                            </div> 
                        </div>
                        <div className='card'>
                            <div><button className='btn2'>1 month free </button></div>
                            <div><button className='btn1'>One-time plans available</button></div>
                            <div><b>Duo</b></div>
                            <div>₹149/month after offer period</div>
                            <div>2 account</div>
                            <div className='data'>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>For couples who live together</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Ad-free music listening</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Group Session</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Download 10k songs/device, on 5 devices per account</span>
                                </p>
                            </div>
                            <div>
                                <button className='view'>VIEW PLANS</button>
                                <p className='cond'><a href='#'>Terms and condition apply.</a> 1 month free not available for user who have already tried premium</p>
                            </div> 
                        </div>
                        <div className='card'>
                            <div><button className='btn2'>1 month free </button></div>
                            <div><button className='btn1'>One-time plans available</button></div>
                            <div><b>Family</b></div>
                            <div>₹179/month after offer period</div>
                            <div>Up to 6 accounts</div>
                            <div className='data'>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>For family who live together</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Block explicit music</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Ad-free music listening</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Group Session</span>
                                </p>
                                <p>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADv7+/4+Pjr6+vy8vL19fX6+vro6OgUFBScnJwKCgrCwsIsLCyWlpazs7MbGxsiIiJiYmKmpqbZ2dkuLi4gICDExMSysrKSkpKgoKCqqqqAgIB0dHS6uronJydxcXHPz89NTU1DQ0NWVlY7OzvW1tYnTQjLAAAClElEQVR4nO3bfVPiMBDH8QYfwKOHyoPAWVEU7/2/xGMvCeINYintNbv9fv6FZnbnFzKzBLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAaNWi7QKatnTjtkto1sg52y0unbPd4sh5g7YLaQoNakeD2tGgdj+sN0iC2plvkC2qHQ1q15kGL9supCkkqB0JakeC2v2iQeVoULvYYK/tQpoy6UiCQxLUatKVBK03ODS7RR+7kqDZBh870qDdLRoavLHeoPktSoJqmU9wERK8aruQpiw6kuBNQgkWT3WutkjvkCmcW9a3WmjwLqUEpaBJXavdprdFV76kmn5NnmCCIUPn8jrWSjBB8eLLWp+/0m2KCYqxL2x67joxwes6iqrXqy/tzIu9ZBMUbzV8pRmOrLsEE9zqz/z+uqi+xCrNQ2bn4uFvfc/9qguELfqQZoKi5yt8r/h42lvUu/Q1vlZ6eJV8gmLqq6zyDyQNCYrQ4umDRmjwPvUGs2ztKy1OfCwmeMZB/N/kvtbTZikdn8EonPmnzFJxi2pIUIS7lFXpB3QlKMLP6Ocl364tQVGcMkvlak7RfU/lZ6mQ4LOmBMW47CyVK9yi3sZX/t3XgbnSBMVbmVkqJlh5HGmVHxdnx96iOcGt/v13s1RsUGeCW1fD47OU8gRFmIg3h18NDf5Um6AY+CZeDr1mIEEx/XKWMpGgWH8xS821HzIf5gdnqZig8i3qhXHx072UoQRF+J/L3r3U3FKCYvTPLBUbNJKgKD7NUnGLmklQFHuzlMEExXg3Sxk7ZD5swixlNEHhL1BnVhMU727HYoLZ7gLVbIJb17YTFD3rDfpx0ewW9QZuY7vBLPttvUEAAAAAAAAAAAAAAAAAAAAAAAAAwDF/AOseGAesjXH2AAAAAElFTkSuQmCC'></img>
                                    <span>Download 10k songs/device, on 5 devices</span>
                                </p>
                            </div>
                            <div>
                                <button className='view'>VIEW PLANS</button>
                                <p className='cond'><a href='#'>Terms and condition apply.</a> 1 month free not available for user who have already tried premium</p>
                            </div> 
                        </div>

                    </div>
                    <div id='comp4_foot'>
                        Special discount for eligible students in University <button>LEARN MORE</button>
                    </div>
                </center>
            </div>
          )
    }
  
}

export default Componentnew