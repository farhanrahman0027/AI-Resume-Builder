import { FilePenLineIcon, PlusIcon, UploadCloudIcon, UploadIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";

const Dashboard = () => {
  
  const colors=["#FFFFFF","#F3F4F6","#F97316","#06B6D4","#EC4899","#84CC16"]
  const [allResumes,setAllResumes]=useState([]);

  const loadAllResumes=async () => {
    setAllResumes(dummyResumeData);
  }

  useEffect(()=>{
    loadAllResumes();
  },[])
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome,farhan
        </p>

        <div className="flex gap-4">
          <button className="w-full bg-white sm:max-w-36 h-44 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600 transition-all">
              Create Resume
            </p>
          </button>

          <button className="w-full bg-white sm:max-w-36 h-44 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-purple-600 transition-all">
             Upload Existing
            </p>
          </button>
        </div>
      </div>
      <hr className="border-slate-300 my-2 mx-4 sm:w-[305px]" />
    
      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
        {allResumes.map((resume,index)=>{
         const baseColor=colors[index%colors.length];
         return(
          <button key={index} className="relative w-full sm:max-w-36 h-44 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer " 
          style={{background:`linear-gradient(135deg, ${baseColor}10,${baseColor}40)`,borderColor:baseColor+'40'}}>
            
            <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{color:baseColor}}/>
            <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{color:baseColor}}>
              {resume.title}
            </p>
          </button>
         )
        })}
      </div>
    </div>
  );
};

export default Dashboard;
