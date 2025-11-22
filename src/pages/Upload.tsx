import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Upload as UploadIcon, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const pdfFiles = droppedFiles.filter(file => file.type === "application/pdf");
    setFiles(prev => [...prev, ...pdfFiles].slice(0, 3));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles].slice(0, 3));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4">Upload Exam Papers</h1>
            <p className="text-lg text-muted-foreground">
              Upload 2-3 exam papers to begin your analysis
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Papers</CardTitle>
              <CardDescription>
                PDF format only • Max 10 pages per paper (Free tier) • {3 - files.length} slots remaining
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`relative rounded-lg border-2 border-dashed transition-all ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept="application/pdf"
                  onChange={handleFileInput}
                  className="absolute inset-0 z-10 cursor-pointer opacity-0"
                  disabled={files.length >= 3}
                />
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <UploadIcon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mb-2 text-lg font-medium">
                    {files.length >= 3
                      ? "Maximum files reached"
                      : "Drop your PDF files here"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse
                  </p>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mt-6 space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded bg-primary/10 p-2">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {files.length >= 2 && (
            <Alert className="mb-6 border-primary/20 bg-primary/5">
              <AlertCircle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-sm">
                <strong>Cost Estimate:</strong> ~8 Credits (based on estimated page count)
                <br />
                Processing will begin after confirmation.
              </AlertDescription>
            </Alert>
          )}

          <div className="flex justify-end gap-4">
            <Button variant="outline" size="lg">
              Cancel
            </Button>
            <Button
              variant="hero"
              size="lg"
              disabled={files.length < 2}
            >
              Start Analysis
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
