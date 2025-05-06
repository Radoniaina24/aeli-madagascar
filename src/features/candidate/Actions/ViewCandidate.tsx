import React, { useState } from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { FaCheck, FaEye } from "react-icons/fa";
import Modal from "./Modal";

export default function ViewCandidate({ user }: { user: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  // console.log(open);
  return (
    <div>
      <div className="hidden md:block">
        <button onClick={() => setOpen(true)}>
          <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />
        </button>
      </div>

      <div className="mt-4 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-100 flex items-center text-green-600 hover:bg-green-200 text-sm px-3 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <FaEye className="mr-1" /> Voir
        </button>
      </div>
      <Modal isOpen={open} title="Détails du candidat" onClose={handleClose}>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
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
              <div className="flex items-center">
                <FaCheck
                  className={` ${user.photo ? " text-green-500 mr-2" : ""}`}
                />
                <span>Photo récente</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${user.cv ? " text-green-500 mr-2" : ""}`}
                />
                <span>CV</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${user.degree ? " text-green-500 mr-2" : ""}`}
                />
                <span>Diplômes</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${user.cin ? " text-green-500 mr-2" : ""}`}
                />
                <span>Pièce d'identité ou passeport</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${
                    user.birthCertificate ? " text-green-500 mr-2" : ""
                  }`}
                />
                <span>Bulletin de naissance</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${
                    user.certificateOfResidence ? " text-green-500 mr-2" : ""
                  }`}
                />
                <span>Certificat de résidence</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${
                    user.gradeTranscript ? " text-green-500 mr-2" : ""
                  }`}
                />
                <span>Relevé de notes</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
