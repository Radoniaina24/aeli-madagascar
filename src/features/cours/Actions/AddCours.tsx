"use client";
import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import { FaEdit, FaSpinner } from "react-icons/fa";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import FormSelect from "@/components/Form/FormSelect";

import { useAddUserMutation, useUpdateUserMutation } from "@/lib/api/userApi";
import FormInput from "@/components/Form/FormInput";
import { title } from "process";
import FormTextarea from "@/components/Form/FormTextarea";
import FileUpload from "../FileUpload";
import { useAddCoursMutation } from "@/lib/api/coursApi";

export default function AddCours() {
  const [addCours, { error, isLoading }] = useAddCoursMutation();
  const ErrorNotification = (msg: string) => toast.error(msg);
  const SuccessNotification = (msg: string) => toast.success(msg);
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const track = [
    {
      label: "BEL",
      value: "BEL",
    },

    {
      label: "BEN",
      value: "BEN",
    },
  ];
  const level = [
    {
      label: "Licence",
      value: "Licence",
    },

    {
      label: "Master",
      value: "Master",
    },
  ];
  const year = [
    {
      label: "L1",
      value: "L1",
    },

    {
      label: "L2",
      value: "L2",
    },
    {
      label: "L3",
      value: "L3",
    },

    {
      label: "M1",
      value: "M1",
    },
    {
      label: "M2",
      value: "M2",
    },
  ];
  const semester = [
    {
      label: "S1",
      value: "S1",
    },

    {
      label: "S2",
      value: "S2",
    },
    {
      label: "S3",
      value: "S3",
    },

    {
      label: "S4",
      value: "S4",
    },
    {
      label: "S5",
      value: "S5",
    },
    {
      label: "S6",
      value: "S6",
    },
  ];
  const initialValues = {
    track: "",
    level: "",
    year: "",
    semester: "",
    title: "",
    description: "",
    file: null,
  };
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      track: Yup.string().required("La mention est requise"),
      level: Yup.string().required("Le diplôme est requis"),
      year: Yup.string().required("Le niveau est requis"),
      semester: Yup.string().required("Le semestre est requis"),
      title: Yup.string().required("Le titre est requis"),
      description: Yup.string().required("La déscription est requise"),
      file: Yup.mixed().required("Le fichier est requis"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const data = new FormData();
      Object.entries(values).forEach(([key, value]: any) => {
        if (value !== undefined && value !== "") {
          data.append(key, value instanceof File ? value : String(value));
        }
      });
      setSubmitting(true);
      try {
        const response = await addCours(data).unwrap();
        SuccessNotification(response?.message);
        setOpen(false);
        resetForm();
      } catch (error: any) {
        if (error?.data?.message) {
          // console.log(error);

          ErrorNotification(error?.data?.message);
          setOpen(false);
        } else {
          ErrorNotification("Verifier votre connexion internet");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  console.log(formik.values);
  return (
    <>
      <div className="">
        <Toaster />
        <button
          disabled={isLoading}
          type="button"
          onClick={() => {
            setOpen(true);
          }}
          className={`w-full cursor-pointer  sm:w-auto bg-green-600 hover:bg-green-600 text-sm text-white font-bold py-3 sm:py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap`}
        >
          Ajouter
        </button>
      </div>
      <Modal isOpen={open} title="Nouvel cours" onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            id="title"
            label="Titre"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
            touched={formik.touched.title}
            placeholder=""
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              id="track"
              label="Mention"
              value={formik.values.track}
              onChange={formik.handleChange}
              options={track}
              error={formik.errors.track}
              touched={formik.touched.track}
              placeholder="Sélectionnez un mention"
            />
            <FormSelect
              id="level"
              label="Diplôme"
              value={formik.values.level}
              onChange={formik.handleChange}
              options={level}
              error={formik.errors.level}
              touched={formik.touched.level}
              placeholder="Sélectionnez un diplôme"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              id="year"
              label="Niveau"
              value={formik.values.year}
              onChange={formik.handleChange}
              options={year}
              error={formik.errors.year}
              touched={formik.touched.year}
              placeholder="Sélectionnez le niveau"
            />
            <FormSelect
              id="semester"
              label="Semestre"
              value={formik.values.semester}
              onChange={formik.handleChange}
              options={semester}
              error={formik.errors.semester}
              touched={formik.touched.semester}
              placeholder="Sélectionnez un semestre"
            />
          </div>
          <FormTextarea
            id="description"
            label="Déscription"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
            touched={formik.touched.description}
            placeholder="Cours..."
            required
            minCharCount={20}
            hint="Expliquez pourquoi vous souhaitez rejoindre l'AELI Madagascar et ce programme en particulier."
            rows={5}
          />

          <FileUpload
            name="file"
            label="Fichier PDF ou vidéo"
            value={formik.values.file}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              formik.setFieldValue("file", file);
            }}
            error={formik.errors.file}
            touched={formik.touched.file}
            required
            helperText="Format pdf et vidéo uniquement"
          />
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-3 sm:gap-4">
            {isLoading ? (
              ""
            ) : (
              <button
                disabled={isLoading}
                type="button"
                onClick={() => {
                  handleClose();
                }}
                className={`${
                  isLoading ? "cursor-not-allowed" : ""
                }w-full  sm:w-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-3 sm:py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap`}
              >
                Annuler
              </button>
            )}

            <button
              disabled={isLoading}
              type="submit"
              className={` ${
                isLoading ? "cursor-not-allowed " : ""
              } w-full sm:w-auto  flex items-center justify-center text-sm bg-green-500 hover:green-red-700 text-gray-800 font-bold py-2 sm:py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap`}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  {"Ajouter"}
                </>
              ) : (
                <>{"Ajouter"}</>
              )}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
