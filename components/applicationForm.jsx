"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Select,SelectItem,SelectTrigger,SelectContent } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        whatsappNumber: "",
        speciality: "",
        experience: "",
        talentDuration: "",
        workFiles: null,
        resume: null,
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
          setFormData((prev) => ({ ...prev, [name]: files }));
        } else {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
      };
    
      return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Join Vijyapana</h2>
    
          <div className="space-y-2">
            <Label>Name *</Label>
            <Input
              type="text"
              name="name"
              placeholder="First and Last Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
    
          <div className="space-y-2">
            <Label>Email *</Label>
            <Input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
    
          <div className="space-y-2">
            <Label>Phone Number *</Label>
            <Input
              type="tel"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
    
          <div className="space-y-2">
            <Label>WhatsApp or Alternate Number *</Label>
            <Input
              type="tel"
              name="whatsappNumber"
              required
              value={formData.whatsappNumber}
              onChange={handleChange}
            />
          </div>
    
          <div className="space-y-2">
            <Label>Which field do you specialize in? *</Label>
            <Select
              value={formData.speciality}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, speciality: value }))}
            >
              <SelectTrigger name="speciality">Select an option</SelectTrigger>
              <SelectContent>
                <SelectItem value="SOUND ENGINEER & MUSIC PRODUCER">Sound Engineer & Music Producer</SelectItem>
                <SelectItem value="VOICE-OVER ARTIST">Voice-Over Artist</SelectItem>
                <SelectItem value="GRAPHIC DESIGNER">Graphic Designer</SelectItem>
                <SelectItem value="VIDEO EDITOR">Video Editor</SelectItem>
                <SelectItem value="VFX, CGI AND ANIMATION CONTENTS">VFX, CGI, and Animation Contents</SelectItem>
                <SelectItem value="BUSINESS DEVELOPMENT ASSOCIATE">Business Development Associate</SelectItem>
                <SelectItem value="COPY WRITING">Copy Writing</SelectItem>
                <SelectItem value="WEB DEVELOPER">Web Developer</SelectItem>
                <SelectItem value="CONTENT CREATORS (Reels and Stuff)">Content Creators (Reels and Stuff)</SelectItem>
                <SelectItem value="PHOTOGRAPHER (Mobile or Camera)">Photographer (Mobile or Camera)</SelectItem>
                <SelectItem value="CINEMATOGRAPHER">Cinematographer</SelectItem>
                <SelectItem value="LYRICIST">Lyricist</SelectItem>
              </SelectContent>
            </Select>
          </div>
    
          <div className="space-y-2">
            <Label>Past Experience (If any) *</Label>
            <Select
              value={formData.experience}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}
            >
              <SelectTrigger name="experience">Select an option</SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">Yes</SelectItem>
                <SelectItem value="NO">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
    
          <div className="space-y-2">
            <Label>How long have you had talent in this expertise? *</Label>
            <Textarea
              name="talentDuration"
              required
              value={formData.talentDuration}
              onChange={handleChange}
              placeholder="Describe your experience duration"
            />
          </div>
    
          <div className="space-y-2">
            <Label>Submit any of your work (Max 10 files, 100 MB each)</Label>
            <Input
              type="file"
              name="workFiles"
              accept="image/*,video/*,audio/*,.pdf"
              multiple
              onChange={handleChange}
            />
          </div>
    
          <div className="space-y-2">
            <Label>Submit your resume (Max 10 MB)</Label>
            <Input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
            />
          </div>
    
          <Button className="w-full mt-4">
            Submit
          </Button>
        </form>
      );
}

export default Form
