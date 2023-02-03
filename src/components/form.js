import { useForm } from "react-hook-form";
import { useState } from "react";
import "../App.css";
import axios from "axios";

const UPLOAD_URL =
  "https://parts-of-speech-be-production.up.railway.app/upload";
const NewForm = ({ data, setData, setResultAvailable }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    setIsProcessing(true);
    const formData = new FormData();
    formData.append("myFile", selectedFile);
    axios
      .post(UPLOAD_URL, formData)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setResultAvailable(true);
      })
      .catch((err) => {
        console.log(err);
        alert("File Upload Error");
      });
  };
  const onInputClick = (e) => {
    e.target.value = "";
  };

  return (
    <div className="App">
      <p>
        This page allows us to upload a text file (with maximum 7MB limit) and
        check what percentage of sentences have different types of parts of
        speech (Noun,Verb,Adverb and Adjective)
      </p>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          <label htmlFor="myFile">Select a file</label>
          <input
            type="file"
            name="myFile"
            accept="text/*"
            placeholder="Select a text file to check parts of speech"
            onInput={(e) => {
              const file = e.target.files[0];
              if (file.size > 7000000)
                alert("File size cannot exceed more than 7MB");
              else setSelectedFile(file);
            }}
            onClick={onInputClick}
            {...register("message", {
              required: "Required",
            })}
          />
        </div>
        {errors.myFile && <p>Please select a text file</p>}

        <input type="submit" disabled={isProcessing} />
      </form>
      {isProcessing ? (
        <h1>
          Please wait...we are processing your file for Parts of speech. This
          may take 10-120 seconds
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewForm;
