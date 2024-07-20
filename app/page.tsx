import DataObjectIcon from '@mui/icons-material/DataObject';
import { mainColor } from '@/Colors';
import Buttons from '@/extras/Buttons';

export default function Home(){
  return(
    <div className='poppins'>
      <NavBar />
      <CTASection />
    </div>
  )
}

function NavBar(){
  return(
    <div className='flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col'>
      <Logo />
      <Buttons />
    </div>
  )
}

function Logo(){
  return(
    <div className='flex gap-2 items-center'>
      <div style={{ backgroundColor: mainColor }} className="p-3 rounded-md">
        <DataObjectIcon 
          sx={{
            fontSize : 25,
            color : "white"
          }} 
        />
      </div>
      <div className='flex gap-1 text-[19px]'>
          <span style={{ color: mainColor }}>Snippet</span>
          <span className='text-slate-300'>Master</span>
      </div>
    </div>
  )
}

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Organize Your Code Snippets 
        <span style={{ color: mainColor }}> Efficiently!</span>
      </h2>
      <p className="text-center text-base w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search features, you can quickly find the
        snippet you need, right when you need it. Spend less time searching for
        code and more time writing it.
      </p>
      <button
        style={{ backgroundColor: mainColor }}
        className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none rounded-lg"
        type="button"
      >
        Lets get started!
      </button>
    </div>
  );
}
