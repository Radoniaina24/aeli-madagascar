import React, { useState } from "react";
import { FaCheck, FaEye, FaPassport, FaPlus } from "react-icons/fa";
import ModalDetailsCandidate from "./ModalDetailsCandidate";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";
import { GrCertificate, GrNotes } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

export default function ViewCandidate({ user }: { user: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  // console.log(open);
  return (
    <>
      <div className="hidden md:block">
        <button
          onClick={() => setOpen(true)}
          className=" flex gap-2  items-center text-green-600 text-sm px-1 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-100 flex gap-2 items-center text-green-600 hover:bg-green-200 text-sm px-3 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />
          <span>voir</span>
        </button>
      </div>

      <ModalDetailsCandidate
        isOpen={open}
        title="Détails du candidat"
        onClose={handleClose}
      >
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">
                Informations personnelles
              </h4>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Nom</p>
                <p className="font-medium">{user.lastName || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Prénom</p>
                <p className="font-medium">{user.firstName || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{user.emailAddress || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Téléphone</p>
                <p className="font-medium">{user.phoneNumber || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Date de naissance</p>
                <p className="font-medium">{user.dateOfBirth || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Nationalité</p>
                <p className="font-medium">{user.nationality || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Adresse</p>
                <p className="font-medium">{user.address || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Pays</p>
                <p className="font-medium">{user.country || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Ville</p>
                <p className="font-medium">{user.city || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Code postal</p>
                <p className="font-medium">{user.postalCode || "-"}</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">Parcours académique</h4>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Dernier diplôme</p>
                <p className="font-medium">{user.lastDegree || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Établissement</p>
                <p className="font-medium">{user.institution || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Année d'obtention</p>
                <p className="font-medium">{user.graduationYear || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Domaine d'études</p>
                <p className="font-medium">{user.fieldOfStudy || "-"}</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">Programme choisi</h4>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Programme</p>
                <p className="font-medium">{user.program || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Niveau</p>
                <p className="font-medium">{user.studyPeriod || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Mention</p>
                <p className="font-medium">{user.funding || "-"}</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">Documents fournis</h4>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CgProfile className="w-4 h-4 text-red-500" />
                <a
                  href={user.photo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  Photo de profil
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPlus className="w-4 h-4 text-red-500" />
                <a
                  href={user.cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  CV
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GrCertificate className="w-4 h-4 text-red-500" />
                <a
                  href={user.degree.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  Diplôme
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPassport className="w-4 h-4 text-red-500" />
                <a
                  href={user.cin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  CIN
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PiNewspaperClippingLight className="w-4 h-4 text-red-500" />
                <a
                  href={user.birthCertificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  Bulletin de naissance
                </a>
              </div>
              <div className="flex items-center gap-2">
                <TbFileCertificate className="w-4 h-4 text-red-500" />
                <a
                  href={user.certificateOfResidence.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  Certificat de résidence
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GrNotes className="w-4 h-4 text-red-500" />
                <a
                  href={user.gradeTranscript.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:text-red-800 font-medium transition duration-300"
                >
                  Relevé de notes
                </a>
              </div>
            </div>
          </div>
        </div>
      </ModalDetailsCandidate>
    </>
  );
}
