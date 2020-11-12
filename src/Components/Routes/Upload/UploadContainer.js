import React, { useState } from "react";
import UploadPresenter from "./UploadPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { gql } from "apollo-boost";

const UPLOAD = gql`
  mutation uploadPost($caption: String!, $files: [String!]!, $title: String, $hashTags: String!) {
    uploadPost(caption: $caption, files: $files, title: $title, hashTags:$hashTags) {
      id
      caption
      title
    }
  }
`;

export default () => {
    const [loading, setIsLoading] = useState(false);
    const caption = useInput("");
    const title = useInput("");
    const hashTag = useInput("");
    const files = useInput("");

    const [uploadMutation] = useMutation(UPLOAD);

    const handleSubmit = async e => {
        e.preventDefault();
        // if (caption.value === "" || location.value === ""){
        //   Alert.alert("All fields are required.");
        // }
    //   const formData = new FormData();
    //   photo.map( photo => {
    //      const name = photo.filename;
    //      const [, type] = name.split(".");
    //      formData.append("files", {
    //        name,
    //        type: type.toLowerCase(),
    //        uri: photo.uri
    //      });
    //    })
      try {
        // setIsLoading(true);
    //     const 
    //       files
    //   = await axios.post("http://192.168.219.102:4000/api/upload", formData, {
    //     headers: {
    //       "content-type" : "multipart/form-data"
    //     }
    //   });
    //   console.log(files.data.files)
    //   const locationArray = files.data.files.map(location => location.location)
    //   console.log(locationArray);
      const {
        data: { upload }
      } = await uploadMutation({
        variables: {
          files: files.value,
          caption: caption.value,
          title: title.value,
          hashTags: hashTag.value
        }
      });
     } catch(e) {
       console.log(e);
       toast.error("Can't upload");
     } finally {
       setIsLoading(false);
       window.location.reload();
     }
   }
      return (
       <UploadPresenter
       title={title}
       hashTag={hashTag}
       caption={caption}
       files={files}
       onSubmit={handleSubmit}
       />
      );
   };