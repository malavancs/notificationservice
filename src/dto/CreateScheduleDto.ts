import { Type } from 'class-transformer';
import { IsEmail, IsString, IsDateString,IsIn, IsObject, IsOptional, ValidateNested } from 'class-validator';

class Message {
    @IsString()
    public message: string;

    @IsOptional()
    @IsString()
    public subject: string;
    
    @IsObject()
    @IsOptional()
    public other: any;
}

class CreateScheduleDto {
    @ValidateNested()
    @Type(() => Message)
    public message: Message;
    @IsDateString()
    public scheduleTime: Date;
    @IsIn(['email','sms'])
    public medium: string;
}
export default CreateScheduleDto;