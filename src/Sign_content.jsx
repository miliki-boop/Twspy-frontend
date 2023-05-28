import './b.css';
import React,{ useState }from 'react';
import { useNavigate } from 'react-router-dom';


const Sign_content = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isVisible, setIsVisible] = useState(false);
  
  const handleClick = () => {
      setIsVisible(true);
    };

  const sendDataToPHPApp=(url, id)=>{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: id,action:'getID'}),
    })
      .then(response => response.json())
      .then(data => {
        // 处理从PHP应用返回的数据
        if(data.success)
          {console.log(data);
          navigate('/index/' + data.message[0].id);
          }
        else{
          handleClick();
        }
      })
      .catch(error => {
        // 处理请求错误
        console.error('Error:', error);
      });
  }




  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Search for Your Username
          </h2>
        </div>

        <div className="w-3/5 mx-auto">

          <form>
            <div className="relative mt-10">
              <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
                placeholder="Input the username"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-gray-200 text-gray-600 rounded-r" onClick={(event)=>{event.preventDefault(); sendDataToPHPApp('/select.php',inputValue);}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              </button>
            </div>
          </form> 
          <div>
            {isVisible && <h2 className='text-red-500 text-lg px-4 py-2'>Now we don't support searching for the unkonwn user</h2>}
          </div> 
        </div>
      </div>
    </>
  );

};
  
export default Sign_content;