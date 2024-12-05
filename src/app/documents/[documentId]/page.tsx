import { preloadQuery } from 'convex/nextjs';
import { auth } from '@clerk/nextjs/server'
import { Document } from "./document";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from '../../../../convex/_generated/api';

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<'documents'> }>
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {

  const { documentId } = await params;

  const { getToken } = await auth();

  const token = await getToken({ template: "convex" }) ?? undefined;

  if (!token) {
    throw new Error("Unathorized")
  }

  const preloadedDocument = await preloadQuery(api.documents.getById, { id: documentId }, { token })

  if (!preloadedDocument) {
    throw new Error("Document not found.")
  }
  return (<Document preloadedDocument={preloadedDocument} />);
}

export default DocumentIdPage;