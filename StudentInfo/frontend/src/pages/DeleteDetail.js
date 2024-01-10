/*import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Back from "./Back";
import axios from 'axios';
const DeleteDetail=()=>{
    const [loading,setLoading]=useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    const handleDelete=()=>{
        setLoading(true);
     axios.delete( `http://localhost:5555/regs/${id}`)
     .then(()=>{
        setLoading(false);
        setDeleteSuccess(true);
        navigate('/');
     })
     .catch((error)=>{
        console.log(error.message);
        setLoading(false);
     })
    }
    return(
        <div>
            <Back></Back>
            <h3>Are u sure want to delete this book??</h3>
            
      {deleteSuccess && <p>Data deleted successfully!</p>}
    

      {!deleteSuccess && (
        <button
          className="bg-red-500 p-4"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      )}
        </div>
    )
}
export default DeleteDetail;*/
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Back from "./Back";

const DeleteDetail = () => {
  const [loading, setLoading] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);

    fetch(`http://localhost:5555/regs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you may need, such as authorization headers
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setLoading(false);
        setDeleteSuccess(true);
      })
      .catch(error => {
        console.error('Error deleting data:', error.message);
        setLoading(false);
        setDeleteError(error.message);
      });
  };

  return (
    <div>
      <Back />
      <h3>Are you sure you want to delete this book??</h3>

      {deleteSuccess && <p>Data deleted successfully!</p>}
      {deleteError && <p>Error: {deleteError}</p>}

      {!deleteSuccess && (
        <button
          className="bg-red-500 p-4"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      )}
    </div>
  );
};

export default DeleteDetail;
